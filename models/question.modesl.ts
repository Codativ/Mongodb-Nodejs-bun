import mongoose, { Schema, Document } from "mongoose";

interface IQuestion extends Document {
  category: string;
  question: string;
  answer: string;
  image?: string;
  options: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const QuestionSchema: Schema<IQuestion> = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    options: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IQuestion>("Question", QuestionSchema);
