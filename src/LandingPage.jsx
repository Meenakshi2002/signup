import { useState, useRef } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import * as AWS from "aws-sdk";
//const AWS = require("aws-sdk");
//const aws= require("aws-sdk")
// AWS.config.update({
//   region: 'us-west-2', // update your region here
//   endpoint: 'dynamodb.us-west-2.amazonaws.com',
//   accessKeyId: 'ASIAX4XVRV2NFQCX4FPY', // update your accessKeyId here
//   secretAccessKey: 'u9JtT133ZSybI9YAFYo5OwANhoPkB3vVNxfBafFc',
//   // sessionToken : 'IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCwcY6KNqagv39nLKjP/vc+7xzu7DdTHvY43Qpbid4EFQIgJZBY+O72m3ijl2XPrbiCNb4RHwFXNil3tGo5AFTHDvIqpQIIeBABGgwyMTQ5NzMyNzgyNjQiDPpVl+aNK7BvhKSYiyqCAobBbMwEN6R86tpzjUTh6E2sTzIWUtCUglzqBKb1edGaCvHSuGJK9oYd9BfvHdDxbY1XJsDkni84Tiv5A/KRvEkZVdCXFL+XMmM7GaQkbJEKeaQGLmyIUGmN6bCXkueVmzkjGYJhEyS8V66QXhUFa8/Nx9mvNDgMaX+rFpGgoxGTeytck5vkKHEQJIH3YbSj74uItiIbpK8HvgCLQvMT7F4DdDxYxjGj7vCDoRzrweCPmztmVXfHwdITwGqtMpsCQVd/XRnrL05rz+qQ+jzTWEqWVkmGjaRSgiAyeP+wcD9+k9JST5FsLw62FrSsRVu/8xrEnykZbUO/nZDC6h5dhhHaPTCdv4G3BjqdAUk4YSjKWeRLwmPibNI/DV/wpabWn0X3LIAfo4U8/bq0UgotpjepgLqIvXUT3rEmDa8ysbyd1nCYziREG67spYySvk2021XHBkgIbzBiJMdYbg0neZn9FXrp2MNOzQDvMZ7zZ5F6t50iH6TbPCPPqqsAlkl9McWFnCJQCn/7kp+zF0pdlncQutE20TNqH8ZiYy2Sg9o80EOedUJLa5g=' // update your secretAccessKey here
// })

 //const dbClient = new AWS.DynamoDB.DocumentClient({region:'us-west-2' ,endpoint: 'dynamodb.us-west-2.amazonaws.com', accessKeyId:'ASIATEDLH5A4FBVXNMXY' , secretAccessKey:'va3ARGBsSgogu4A2l7k7CrGkIdAzrvobnov9Y/uy'  }); //{ region: config.region, accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey }
 
 const dbClient = new AWS.DynamoDB.DocumentClient({
   region: 'us-west-2',
   endpoint: 'dynamodb.us-west-2.amazonaws.com',
  credentials: {
    accessKeyId: 'ASIATEDLH5A4BYLNADV7',
    secretAccessKey: 'p1Usa8ijOoQLxvO6ujvu7I68fTJmqrTSSZPDKEPC',
    sessionToken: 'IQoJb3JpZ2luX2VjEJb//////////wEaCXVzLXdlc3QtMiJIMEYCIQCN0O9u6dUx1PFPFb6ur8QLYharZ/5YAto1WFZFaSWDDQIhAJ6X0G3z1d82ZdvGl7aeRcdEAy6fA2N8iiTC7oCLyEKBKq4CCL///////////wEQARoMMjE0OTczMjc4MjY0IgyYRNsXzBZcMpStEWEqggI1cumNXwTZ8QACot02pVH/6xxhSW1kbof+vLV35j7PEWjU/J06qyleULi5cmPi/g3luelKH6+xRFp0gNB8xYiXL4AHGzY1TzCi2Y7T6Xzvlh107blXZAnrbbWC90Xu2vKlYHbE7gnrbWJi1nr/PU0tO28gbgFMTKOP3ZTqw/+ArYvTe4gzTa5e11+RxmmCgQVqT4EeoU//o5XU5VPT+ccxolRf5TeuP78PBHJR3NM+5c/4LWel39a4neIHFHI2TMo/hu+H1rUct/mj/86qquLVAuI0UaAKjccjBDnWb11te8pM7XR3KfPE/wIPhTgM5LDvFznIbHKcxqp3zlrUVA4nBKAwrYWRtwY6nAHaZIJM4gkNJuwuj6Dap6k0JPPsugG/Q2n+rJLXCnO4IPvubur8oJ1JHp7H9EppeQmAwgqsVCTHQRbm0d50YVWPF+dgaR2Wr5HBlO7X4xcmyvACrMBeCgNfPeH2zLKsbWl2fJpMZnNMSW1faCJVkpsTMLZPPXJxIQXKef9FqtAmjPYZfMKUEjgvG4UaSUn6xmQbbgptKyg6v9mJnbg='
  },
});

export const LandingPage = () => {
  const [email, setEmail] = useState();
  const emailRef = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    const _email = emailRef.current.value;

    let params = {
      TableName: 'signup-yt',  // update your table name here
      Item: {
        email: _email
      }
    }

    dbClient.put(params, function(err,data){
      if(err){
        console.log(err)
      }
      else{
        console.log("success")
      }
    })
  };
  return (
    <section className="container mx-auto py-2">
      <Header logo="LOGO" />
      <section className="flex flex-col items-center h-screen justify-center">
        <h2 className="text-7xl font-black text-green-600">
          Welcome to our page
        </h2>
        <h3 className="text-4xl font-medium text-green-300 mt-5">
          Enter your email to receive exciting news!!
        </h3>
        <form className="mt-10">
          <Input
            type="email"
            placeholder="Enter your email"
            inputRef={emailRef}
          />
          <Button buttonLabel="submit" submitHandler={submitForm} />
        </form>
      </section>

      <footer className="text-center">
        <small>2024</small>
      </footer>
    </section>
  );
};
