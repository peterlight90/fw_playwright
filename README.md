## Prerequisites
```
PlayWright latest
```

## Installation
```bash
npm i playwright
```
### VSCode Extensions

## Usage

### Run on terminal
```bash

```

### Run on VSCode
```
```

## Generate Reports
```
After executing the tests, generate the report by running a command: 
pipenv run generate_allure_report 
The Allure report will be generated at  ./reports_allure

```
## Integration with Testrail

## Project Structure

```
-----------
    ├── lib                        <- Included all base actions, test data, helpers,..
    │   ├── core
    │      ├── base.py
    │      ├── base_assertions.py
    │      ├── base_test.py
    │
    │   ├── test_data              <- Each file in the folder contains data for each page and can be reused in different testcases.
    │      ├── ecourier_platform.py
    │   └── utils
    │
    ├── pages                      <- Included all element controls, page actions, and verify actions.
    │
    ├── settings                   <- Included all settings of project (Global Settings, Config, Web Settings, Report, Sauce labs,...)
    │   ├── test_settings.py       
    │
    ├── tests                      <- Included script to run testcases
    │
    │
    ├── README.md                  <- The top-level README for users using this project.
    │
    └──

```
## Contributing
```
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
```
