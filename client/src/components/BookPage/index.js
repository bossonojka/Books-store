import { connect } from 'react-redux';
import { BookPage } from './BookPage';
import { getBookById } from '../../redux/books/books-actions';

const mapStateToProps = (state) => ({ books: state.books.books });

const mapDispatchToProps = {
  getBookById,
};

const BookPageContainer = connect(mapStateToProps, mapDispatchToProps)(BookPage);

export { BookPageContainer };
