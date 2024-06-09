import { Schema, model, models } from "mongoose";

const UserSchema = newSchema(
    {
        
        email:{
            type:String,
            unique:[true, 'Email Already Exists'],
            required:[true, 'Email is Required'],
        },
        username: {
            type: String,
            required: [true, 'Username is required!'],
            match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
          },
        password: {
            type: String,
            required: [true, 'Password is required!'],
            match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password invalid, it should contain 8-20 alphanumeric letters and be unique!"]
          },

          image:{
            type:String
          }
    }
);

const User = model.User || ('User', UserSchema);

export default User;

