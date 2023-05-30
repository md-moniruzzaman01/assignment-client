import { ITask } from "./task.interface"
import Books from "./task.model"
export const getTheBook = async (): Promise<ITask[]> => {
    const books = await Books.find({});
    return books;
}

export const getTheFantasyBook = async (formData:ITask): Promise<ITask[]> => {
    console.log(formData);
    const user = new Books(formData);
    await user.save();
    return [user];
}

export const getTheFeaturedBooks = async (userId:string, formData:ITask): Promise<ITask[]> => {
    if (userId && formData) {
        const user = await Books.findByIdAndUpdate(userId, formData, { new: true }) as unknown as ITask;
        return [ user ] ;
    }
    else{
        return [];
    }
}



export const getIntegerPriceData = async (): Promise<ITask[]> => {
    const books = await Books.aggregate([
        {$match: {publicationYear: {$gt: 2020}}},
        {
        $project: {
          price: { $toInt: "$price" },
          title: 1,
          author: 1,
          genre: 1,
          publicationYear: 1,
          publisher: 1,
          reviews: 1,
          rating: 1
        }
      }
        ])
    return books;
}