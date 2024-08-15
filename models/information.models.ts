import mongoose, { Schema, Document } from "mongoose";

interface IInformation extends Document {
  category: string;
  question: string;
  answer: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const IInformationSchema: Schema<IInformation> = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please Enter the Category"],
  },
  question: {
    type: String,
    required: [true, "Please Enter The Question"],
  },

  answer: {
    type: String,
    required: [true, "Please Enter the Answer"],
  },
});


const Information = mongoose.model<IInformation>('Information', IInformationSchema);
export default Information;
