import { useForm } from "react-hook-form";

const BookATable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {table, time, food} = data
    console.log(table, time, food)
  };

  return (
    <div className="mt-10 mx-10 ">
      <div className=" p-10 shadow-2xl">
        <h3 className="text-center text-2xl font-medium">Book a table</h3>
        <form className="text-white text-lg" onSubmit={handleSubmit(onSubmit)}>
          <select 
            {...register("table", { required: true })}
            className="mt-3 px-4 h-10 rounded-sm  w-full bg-yellow-700 outline-none"
          >
            <option value="Table-1">Table-1</option>
            <option value="Table-2">Table-2</option>
            <option value="Table-3">Table-3</option>
            <option value="Table-4">Table-4</option>
            <option value="Special Table-1">Special Table-1</option>
            <option value="Special Table-2">Special Table-2</option>
            <option value="Special Table-3">Special Table-3</option>
            <option value="Out Door-1">Out Door-1</option>
            <option value="Out Door-2">Out Door-2</option>
            <option value="Out Door-3">Out Door-3</option>
          </select>
          <select
            {...register("time", { required: true })}
            className="mt-3 px-4 h-10 rounded-sm w-full bg-yellow-700 outline-none"
          >
            <option value="9:00 am">9:00 am</option>
            <option value="10:00 am">10:00 am</option>
            <option value="11:00 am">11:00 am</option>
            <option value="12:00 pm">12:00 pm</option>
            <option value="1:00 pm">1:00 pm</option>
            <option value="2:00 pm">2:00 pm</option>
            <option value="3:00 pm">3:00 pm</option>
            <option value="4:00 pm">4:00 pm</option>
            <option value="5:00 pm">5:00 pm</option>
            <option value="6:00 pm">6:00 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="9:00 pm">9:00 pm</option>
            <option value="10:00 pm">10:00 pm</option>
          </select>
          <select
            {...register("food", { required: true })}
            className="mt-3 px-4 h-10 rounded-sm w-full bg-yellow-700 outline-none"
          >
            <option value="Chicken Leg Fry">Chicken Leg Fry</option>
            <option value="Beef">Beef</option>
            <option value="Noodles">Noodles</option>
            <option value="Thai Soup">Thai Soup</option>
            <option value="Rice & Curry">Rice & Curry</option>
          </select>
          <input
            type="submit"
            value="Book Now"
            className="mt-5 btn text-white font-bold bg-gradient-to-r from-yellow-700 to-yellow-600"
          />
        </form>
      </div>
    </div>
  );
};

export default BookATable;
