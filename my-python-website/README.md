# My Python Website

This project is a simple web application built using Flask. It serves as a starting point for creating a Python-based website.

## Project Structure

```
my-python-website
├── src
│   ├── app.py
│   ├── templates
│   │   └── index.html
│   └── static
│       └── style.css
├── requirements.txt
├── render.yaml
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-python-website
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

## Running the Application

To run the application locally, execute the following command:

```
python src/app.py
```

The application will be available at `http://127.0.0.1:5000`.

## Deployment

This application can be deployed on Render. The configuration for deployment is specified in the `render.yaml` file. Follow the instructions in the Render documentation to set up your deployment.

## License

This project is licensed under the MIT License. See the LICENSE file for details.