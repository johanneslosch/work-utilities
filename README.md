# work-utilities

Helper functions as a local webpage that support various tasks in my day-to-day job.

## Features

- A collection of utility functions to simplify repetitive tasks.
- Accessible through a user-friendly local webpage.
- Designed to improve productivity and efficiency.
- Stringify JSON objects for better readability.
- Parse JSON strings back into objects.
- Anonymize UUIDs in JSON data.
- Minimal logging with no data storage to ensure privacy.

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/johanneslosch/work-utilities.git
  ```

- Or run the docker container using
  ```bash
  docker run -p 80:80 ghcr.io/johanneslosch/work-utilities
  ```

## Usage

- Open the `src/index.html` or start the docker container
- Or in case of docker open `http://localhost`

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the Apache License 2.0. See the `LICENSE` file for details.
