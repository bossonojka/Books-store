import { connect } from 'react-redux';
import { Filter } from './Filter';
import { requestBooks, requestCategories, setCheckedCategory } from '../../redux/books/books-actions';

const mapStateToProps = (state) => ({
  categories: state.books.categories,
});
const mapDispatchToProps = {
  requestCategories,
  setCheckedCategory,
  requestBooks,
};
export const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
