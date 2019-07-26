# Tunaiku Teschincal Test

Hi! My name is Julio Tanadi.
This is my repository that contain of my source code for technical test at Tunaiku.

## Install and Run Instruction

Use [docker-compose](https://docs.docker.com/compose/install/) to install this application.

    docker-compose up -d

## API References

The REST API to the example app is described below.

### Create New Loan

> POST /loan

#### Request

    {
        "Date": "2018-09-01",
        "KTP": "3522580509010002",
        "BirthDate": "2001-09-05",
        "Gender": "Male",
        "Name": "Wiro",
        "Amount": "2000000",
        "Period": 12
    }

#### Response

    HTTP Status: 200 OK
    Content-type: application/json;

    {
        "KTP": "3522580509010002",
        "Status: "Valid"
    }
