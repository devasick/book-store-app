import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import { getData } from "../../redux/actions/index";
import Pagination from "../pagination/Pagination";
import "./booklist.scss";

export class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 10,
      open: false, //if true popup window will dsiplay
      selectedBook: null // Keep track of the selected book
    };
    this.handleClick = this.handleClick.bind(this); // this function for when we click the pagination
  }
  /**
   * Book data mounted to the DOM
   */
  componentDidMount() {
    if (this.props.books) {
      this.props.getData();
    }
  }
  /**
   * Updating pagination data for when click the category
   * @param {*} previousProps  it checking previous props
   */
  componentDidUpdate(previousProps) {
    // updating pagination to current page
    if (this.state.currentPage !== 1) {
      let totalPages = Math.ceil(
        this.props.books.length / this.state.booksPerPage
      );
      if (
        this.state.booksPerPage > totalPages &&
        previousProps.books !== this.props.books
      ) {
        this.setState({
          currentPage: 1
        });
      }
    }
  }
  componentWillUnmount() {
    this.props.getData();
  }

  onOpenModal = bookId => {
    this.setState({
      open: true,
      selectedBook: bookId // When a book is clicked, mark it as selected
    });
  };
  /**
   * this function will call when close popup window
   */
  onCloseModal = () => {
    this.setState({ open: false });
  };
  /***
   * truncateTitle for trim title size
   */
  truncateTitle = string => {
    return string.length > 10 ? string.substring(0, 40) + "..." : string;
  };
  /**
   * renderBooks : display all books data
   * truncateTitle : accessing truncateTitle function
   * onClick : onOpenModal will call to open popup window
   */
  renderBooks = data => {
    return data.map(row => {
      return (
        <div
          className='col s6 m3 box card book-box'
          key={row.id}
          onClick={() => this.onOpenModal(row.id)}>
          <div className='card-image'>
            {row.thumbnailUrl ? (
              <img src={row.thumbnailUrl} alt={row.title} />
            ) : null}
          </div>
          <div className='book-title'>{this.truncateTitle(row.title)}</div>
          <p className='author'>
            <span>Author:</span> {row.authors}
          </p>
        </div>
      );
    });
  };

  /*
  # renderBookModal: this function trigger when we click the book 
  */

  renderBookModal = () => {
    // Check to see if there's a selected book. If so, render it.

    if (this.state.selectedBook !== null) {
      const book = this.props.books.filter(
        book => book.id === this.state.selectedBook
      );
      return (
        <div style={{ maxWidth: 700, height: 650 }} className='book-details'>
          <div className='row'>
            <h5>{book[0].title}</h5>
            <div className='col m6'>
              <img src={book[0].thumbnailUrl} alt={book[0].title} width={300} />
            </div>
            <div className='col m6'>
              <p>
                <span>Author:</span> {book[0].authors}
              </p>
              <hr></hr>
              <p>
                <span>Publisher:</span> {book[0].publisher}
              </p>
              <hr></hr>
              <p>
                <span>Publication Date:</span> {book[0].publishedDate}
              </p>
              <hr></hr>
            </div>
            <div className='col m12'>
              <p>{book[0].longDescription}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  /*
   # when we click pagination number and updating the current page value
   # currentPage is state value
   */

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    /*
     Pagination data
    */
    const { currentPage, booksPerPage } = this.state;
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    // rendering current book list

    const currentBooks = this.props.books
      ? this.props.books.slice(indexOfFirstBook, indexOfLastBook)
      : "";

    return (
      <div>
        <div className='container book-list'>
          <h4 className='title'>
            {this.props.catagory ? this.props.catagory : "Books List"}
          </h4>
          {/* Top Pagination numbers start here  */}
          <div className='page'>
            <Pagination
              bookDatalength={this.props.books ? this.props.books.length : null}
              booksPerPage={booksPerPage}
              click={this.handleClick}
              currentPage={this.state.currentPage}
            />
          </div>
          <div className='row'>
            {this.props.books
              ? this.renderBooks(this.props.books ? currentBooks : null)
              : null}
          </div>
          {/* Book Details Popup box start here */}
          {this.state.open ? (
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
              <div>{this.renderBookModal()}</div>
            </Modal>
          ) : (
            ""
          )}
          {/* Pagination numbers start here  */}
          <div className='page'>
            <Pagination
              bookDatalength={this.props.books ? this.props.books.length : null}
              booksPerPage={booksPerPage}
              click={this.handleClick}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}
/**
 *
 * @param {*} state
 * filter the category
 * filter the search
 * displaying all books
 */
function mapStateToProps(state) {
  let bookObj;
  if (state.catagory) {
    bookObj = state.books.filter(
      category => category.categories[0] === state.catagory
    );
  } else if (state.searchValue) {
    bookObj = state.books.filter(
      val =>
        val.title.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1
    );
  } else {
    bookObj = state.books;
  }
  return {
    books: bookObj,
    catagory: state.catagory,
    searchValue: state.searchValue
  };
}

export default connect(mapStateToProps, { getData })(BookList);
