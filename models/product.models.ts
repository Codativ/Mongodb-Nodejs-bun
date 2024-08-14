import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    quantity: number;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
}


const ProductSchema: Schema<IProduct> = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "string",
            required: [true, "Please enter product name"]
        },
        quantity: {
            type: Number,
            default: 0,
            required: [true, "Please Enter the quantity"]
        },
        image: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);


const Product = mongoose.model<IProduct>('Product', ProductSchema);
export default Product;
