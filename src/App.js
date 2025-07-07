import Accordian from "./components/Accordian";
import API from "./components/API";
import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import Debugging from "./components/Debugging";
import DropDown from "./components/DropDown";
import FizzBuzz from "./components/FizzBuzz";
import Form from "./components/Form";
import GitHubSearch from "./components/GitHubSearch";
import Highlighter from "./components/Highlighter";
import InfiniteScroll from "./components/InfiniteScroll";
import Modal from "./components/Modal";
import MultiStepForm from "./components/MultiStepForm";
import Pagination from "./components/Pagination";
import ShoppingCart from "./components/ShoppingCart";
import SortableTable from "./components/SortableTable";
import StarRating from "./components/StarRating";
import Stopwatch from "./components/Stopwatch";
import Tabs from "./components/Tabs";
import Todo from "./components/Todo";
import './App.css';

export default function App() {
  return (
    <div>
      <Todo />
      <Counter />
      <Form />
      <Modal />
      <Accordian />
      <API />
      <GitHubSearch />
      <Tabs />
      <Carousel />
      <Pagination />
      <InfiniteScroll />
      <DropDown />
      <StarRating />
      <ShoppingCart />
      <Stopwatch />
      <FizzBuzz />
      <Highlighter />
      <SortableTable />
      <MultiStepForm />
      {/* <Debugging /> */}
    </div>
  );
}
