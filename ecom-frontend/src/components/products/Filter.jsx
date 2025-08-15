import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({ categories }) => {
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const currentCategory = searchParams.get("category") || "all";
    const currentSortOrder = searchParams.get("sortby") || "asc";
    const currentSearchTerm = searchParams.get("keyword") || "";

    setCategory(currentCategory);
    setSortOrder(currentSortOrder);
    setSearchTerm(currentSearchTerm);
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        searchParams.set("keyword", searchTerm);
      } else {
        searchParams.delete("keyword");
      }
      navigate(`${pathname}?${searchParams.toString()}`);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [searchParams, searchTerm, navigate, pathname]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    navigate(`${pathname}?${params}`);
    setCategory(event.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => {
      const newOrder = prevOrder === "asc" ? "desc" : "asc";
      params.set("sortby", newOrder);
      navigate(`${pathname}?${params}`);
      return newOrder;
    });
  };

  const handleClearFilters = () => {
    navigate({ pathname: window.location.pathname });
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-6 mt-0 px-2 py-4 rounded-xl shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50">
      
      {/* Search Bar */}
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-purple-300 text-slate-700 rounded-xl py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md placeholder-slate-400"
        />
        <FiSearch className="absolute left-3 text-purple-600" size={18} />
      </div>

      {/* Category, Sort, Clear */}
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        
        <FormControl variant="outlined" size="small">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            className="min-w-[130px] bg-white rounded-lg text-slate-800"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryName}>
                {item.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Tooltip title={`Sorted by price: ${sortOrder}`}>
          <Button
            variant="contained"
            onClick={toggleSortOrder}
            color="secondary"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:scale-105 transition"
          >
            Sort By {sortOrder === "asc" ? <FiArrowUp /> : <FiArrowDown />}
          </Button>
        </Tooltip>

        <button
          className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition"
          onClick={handleClearFilters}
        >
          <FiRefreshCw size={16} />
          <span className="font-medium">Clear</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
