-- Active: 1697872269771@@127.0.0.1@3306@crudenodejsmysql
 
      CREATE TABLE IF NOT EXISTS customer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        propietario VARCHAR(255),
        arrendatario VARCHAR(255),
        iban VARCHAR(255),
        telefono VARCHAR(255),
        email VARCHAR(255),
        parcela VARCHAR(255),
        superficie VARCHAR(255),
        euros VARCHAR(255),
        uso VARCHAR(255)
      )