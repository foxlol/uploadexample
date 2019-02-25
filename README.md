# Upload Example (Back-end)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Environment configuration (.env file):

```
APP_URL
MONGODB_URL
STORAGE_TYPE (local/s3)
AWS_S3_BUCKET_NAME
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION
```

If you want to use AWS S3 as storage (STORAGE_TYPE) you must have a bucket configured and publicly available with a properly granted user to read and write data.

If you choose "local" as storage type the files will be saved on tmp/upload directory.

## Running

npm start
