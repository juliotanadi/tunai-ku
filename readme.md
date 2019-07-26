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

### Get Loan Application Application By Date

> GET /loan/get-loan-application

#### Request

    {
    	"Date": "2019-07-26"
    }

#### Response

    HTTP Status: 200 OK
    Content-type: application/json;

    {
        "Count": "4",
        "Summary": 7322135,
        "Average": 1830533.75
    }

### Get Installment

> GET /installment/get-installment

#### Request

    {
    	"Date": "2019-07-04",
    	"Amount": 12000000,
    	"Period": 12
    }

#### Response

    HTTP Status: 200 OK
    Content-type: application/json;

    {
        "report": [
            {
                "DueDate": "2019-08-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2019-09-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2019-10-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2019-11-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2019-12-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-01-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-02-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-03-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-04-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-05-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-06-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            },
            {
                "DueDate": "2020-07-04",
                "Capital": 1000000,
                "Interest": 201600,
                "Total": 1201600
            }
        ],
        "Capital": 12000000,
        "Interest": 2419200,
        "Total": 14419200
    }
