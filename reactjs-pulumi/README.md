# Static HTML App with Pulumi and AWS

This project demonstrates how to use **Pulumi** to upload a ReactJS website to **AWS S3** for hosting. It automates the deployment process using a configuration file and environment variables, enabling you to easily deploy the app to AWS.

### Prerequisites

Before you get started, ensure you have the following installed:

1. **Node.js** (v14.x or higher)  
   [Download Node.js](https://nodejs.org/)

2. **Pulumi** (v3.x or higher)  
   [Install Pulumi](https://www.pulumi.com/docs/get-started/install/)

3. **AWS CLI** (Optional but recommended for authentication)  
   [Install AWS CLI](https://aws.amazon.com/cli/)

4. **AWS Account**  
   Ensure that you have an active AWS account and appropriate permissions to create S3 buckets and upload objects.

### Setup Instructions

Follow these steps to configure and deploy your static HTML app using Pulumi and AWS.

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/static-html-pulumi-aws.git
cd static-html-pulumi-aws
```

### 2. Install Dependencies

First, you need to install the project dependencies using npm or yarn.

```bash
npm install
```

### 3. Configure AWS Credentials and Environment Variables

Pulumi requires AWS credentials to interact with your AWS resources. There are multiple ways to configure your AWS credentials, but for this project, we'll use environment variables stored in a .env file.

```bash
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=us-west-2
BUCKET_NAME=your-bucket-name
```

### 4. Run the Pulumi Stack

```bash
pulumi up
```

### Access the Website

Once the all success then it in terminal you will get the website URL.
```
 bucketName: "reactdemoapppulumi-54dc696"
websiteUrl: "reactdemoapppulumi-54dc696.s3-website-us-west-2.amazonaws.com"

```

### Troubleshooting

Error: "Bucket already exists": Make sure the BUCKET_NAME in your .env file is unique. S3 bucket names must be globally unique across AWS.

Error: "Access Denied": Ensure that your AWS credentials have the necessary permissions to create and modify S3 buckets and objects.

Pulumi Account: Make sure you have pulumi account and configured
```
