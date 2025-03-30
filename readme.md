# Dev.to x Pulumi Challange

## Overview

[pulumi-deploy-and-document-challenge](https://dev.to/devteam/announcing-the-pulumi-deploy-and-document-challenge-3000-in-prizes-887?bb=219434)

This repo has 2 repos:

1. HTML (Static) app deployment to AWS s3

2. ReactJS app deplyoment to AWS s3

### Features
- Deploy a static HTML app and ReactJS app to **AWS S3**.
- Use **Pulumi** to automate the deployment process.
- Make the S3 bucket publicly accessible for website hosting.
- Set custom S3 bucket policies.
- Load configuration through environment variables (`.env` file).

### Purpose

This project demonstrates the ease of deploying a static website using infrastructure as code (IAC) principles. Pulumi allows us to write code to define and deploy cloud infrastructure, making it a powerful tool for developers who prefer a more code-centric approach compared to traditional CLI-based tools like Terraform or CloudFormation.

## Tech Stack

- **Pulumi**: Infrastructure as Code (IAC) tool.
- **AWS S3**: Cloud storage service to host the static website.
- **Node.js**: JavaScript runtime used to run Pulumi scripts.
- **AWS SDK**: To interact with AWS resources.
- **dotenv**: Manage environment variables locally.

## Website URL 

Repo: static-app-pulumi
[HTML APP](http://demopulumiwebapp-13b82eb.s3-website-us-west-2.amazonaws.com/)

Repo: static-app-pulumi
[React 19](http://reactdemoapppulumi-54dc696.s3-website-us-west-2.amazonaws.com/)

## Connect with me

[X](https://x.com/hellonehha)
[Linkedin](https://www.linkedin.com/in/nehha/)

MIT License

Copyright (c) [year] [Your Name or Your Organization]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
