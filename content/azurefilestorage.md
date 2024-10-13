---
title: 'Free Cloud Storage for Students with Azure'
author: 'Jeffrey Dinackus'
date: "2024-10-13"
---




Students! Want free cloud storage from Azure? You've come to the right place. 


Through the combination of Azure's student plan and Azure file shares, I have free cloud storage and you do too. 

## Walkthrough:

Remember! Copilot for Azure is here to help! I created a file share with no storage account and got a error, but Copilot assisted with interpreting the error message

Sign up for Azure student plan and create a account

[https://azure.microsoft.com/en-us/free/students](https://azure.microsoft.com/en-us/free/students)

Make sure your storage account under the subscription Azure for Students

Create your file share, I created mine with 50 GB to save money in my student account but it also might be thin provisioned I don't know. In any case, 50 GB is fine for me. (default was 1024 GB which is neat)

Hook your file share onto your machine (windows uses SMB, Mac might use NFS idek)

For windows, they literally give you a powershell command to run in administrator and then it connects!

Then, enter the share name into the file explorer path (windows). It is in the command they give you and starts with backslash backslash and then the name of your share with some stuff on the end. (I am using markdown and backslash is reserved, sorry!)

For windows, I reccomend pinning the share to quick links. 

And that's basically it. 

I didn't give screenshots and click advise because this is a very easy project and I did it without any advice and I encourage the reader to do the same so you can learn more