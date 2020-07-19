define({ "api": [
  {
    "type": "post",
    "url": "/api/students",
    "title": "Add Student",
    "name": "AddStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Student.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Student.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "progressId",
            "description": "<p>Progress of the Student.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": \"4\",\n     \"firstname\": \"Guy\",\n     \"lastname\": \"Buckridge\",\n     \"progressId\": 4,\n     \"createdAt\": \"2020-07-05T22:28:56.000Z\",\n     \"updatedAt\": \"2020-07-05T22:28:56.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StudentNotFound",
            "description": "<p>The id of the Student was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"Error\",\n  \"message\": \"Сannot add student\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/Students/addStudents.ts",
    "groupTitle": "Students"
  },
  {
    "type": "delete",
    "url": "/api/students/:id",
    "title": "Delete Student",
    "name": "DeleteStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Students unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"Ok\",\n     \"message\": \"Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StudentNotFound",
            "description": "<p>The id of the Student was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"Error\",\n  \"message\": \"Student id not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/Students/deleteStudents.ts",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/api/students",
    "title": "Get All Students",
    "name": "GetAllStudents",
    "group": "Students",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Students unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Student.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Student.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "progressId",
            "description": "<p>Progress of the Student.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Create of the Student.</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Last update.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": \"4\",\n     \"firstname\": \"Guy\",\n     \"lastname\": \"Buckridge\",\n     \"progressId\": 4,\n     \"createdAt\": \"2020-07-05T22:28:56.000Z\",\n     \"updatedAt\": \"2020-07-05T22:28:56.000Z\"\n },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StudentNotFound",
            "description": "<p>The id of the Student was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"Error\",\n  \"message\": \"Students not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/Students/getAllStudents.ts",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/api/students/:id",
    "title": "Get Student",
    "name": "GetStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Students unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Students unique ID..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "progressId",
            "description": "<p>Progress of the Student.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": \"4\",\n     \"firstname\": \"Guy\",\n     \"lastname\": \"Buckridge\",\n     \"progressId\": 4,\n     \"createdAt\": \"2020-07-05T22:28:56.000Z\",\n     \"updatedAt\": \"2020-07-05T22:28:56.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StudentNotFound",
            "description": "<p>The id of the Student was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"Error\",\n  \"message\": \"Students id not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/Students/getStudents.ts",
    "groupTitle": "Students"
  },
  {
    "type": "put",
    "url": "/api/students/:id",
    "title": "Update Student",
    "name": "PutStudent",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Students unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>Firstname of the Student.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>Lastname of the Student.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "progressId",
            "description": "<p>Progress of the Student.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": \"4\",\n     \"firstname\": \"Guy\",\n     \"lastname\": \"Buckridge\",\n     \"progressId\": 4,\n     \"createdAt\": \"2020-07-05T22:28:56.000Z\",\n     \"updatedAt\": \"2020-07-05T22:28:56.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StudentNotFound",
            "description": "<p>The id of the Student was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"Error\",\n  \"message\": \"Student id not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/Students/updateStudents.ts",
    "groupTitle": "Students"
  }
] });
