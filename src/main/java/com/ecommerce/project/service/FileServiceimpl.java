package com.ecommerce.project.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;


@Service
public class FileServiceimpl implements FileService{

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        String originalFileName = file.getOriginalFilename();           //Get the file name of current/original file
        String randomId = UUID.randomUUID().toString();                 //generate a unique file name (uuid concept)
        String fileName = randomId.concat(originalFileName.substring(originalFileName.lastIndexOf(".")));  //this concat will preserve the original extension  mat.jpg  --> 1234 --> 1234.jpg
        String filePath = path + File.separator + fileName;             //File.seperator is path making / or \
        File folder = new File(path);
        if(!folder.exists()) //check if path exist and create
            folder.mkdir();  //create the folder
        Files.copy(file.getInputStream() , Paths.get(filePath));
        return fileName;

    }


}
