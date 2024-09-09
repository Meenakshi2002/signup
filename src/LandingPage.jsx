import { useState, useRef } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import * as AWS from 'aws-sdk';

AWS.config.update({
  region: YOUR_REGION, // update your region here
  endpoint: 'dynamodb.us-east-1.amazonaws.com',
  accessKeyId: YOUR_KEY_ID, // update your accessKeyId here
  secretAccessKey: YOUR_SECRET_ACCESS_KEY // update your secretAccessKey here
})

const dbClient = new AWS.DynamoDB.DocumentClient();

export const LandingPage = () => {
  const [email, setEmail] = useState();
  const emailRef = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    const _email = emailRef.current.value;

    let params = {
      TableName: YOUR_TABLE_NAME,  // update your table name here
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
          Your Heading Here
        </h2>
        <h3 className="text-4xl font-medium text-green-300 mt-5">
          your subheading here
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
        <small>2024-2025</small>
      </footer>
    </section>
  );
};
