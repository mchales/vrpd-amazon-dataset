# vrpd-amazon-dataset

## Overview

This project includes an algorithm and visual for the Vehicle Routing Problem with Drones (VRPD) using a dataset from the _2021 Amazon Last Mile Routing Research Challenge_. The VRPD is a variant of the Vehicle Routing Problem (VRP) that includes the use of drones to deliver packages. Solving the VRPD involves optimization, such as those used for the Traveling Salesman Problem (more spefically, the Flying Sidekick Traveling Salesman Problem). Our algorithm and visuals is the first time VRPD is applied on a real-world, large, public dataset.

## Dataset

The dataset is from the _2021 Amazon Last Mile Routing Research Challenge_ and includes Amazon routing information from Amazon drivers in 2018 in Seattle, Los Angeles, Austin, Chicago, and Boston. This dataset is the "first large, real-world, publicly available routing data set" and includes a training and evaluation dataset. The training dataset consists of 6,112 routes performed by Amazon drivers labeled by perceived quality (low, medium, or high). The evaluation dataset contains an additional 3,072 historically observed routes all with high quality

Dataset (3.1 GB) can be downloaded from an S3 bucket using the AWS CLI using the command

```
aws s3 sync --no-sign-request s3://amazon-last-mile-challenges/almrrc2021/ ./almrrc2021/
```

or following the instructions here https://registry.opendata.aws/amazon-last-mile-challenges/

## How to Use

This project is composed of an algorithm and visual component. See their readmes for instructions of how to run their code.
