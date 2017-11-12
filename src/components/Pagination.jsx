import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createFragment from 'react-addons-create-fragment';
import PageView from './pagination/PageView';
import PageInformation from './pagination/PageInformation';


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initialPage ? props.initialPage :
                props.forcePage   ? props.forcePage :
                0
    };
  }

  handlePageSelected = (selected, evt) => {
    console.log("handlePageSelected", selected, evt);
    this.onPageSelected(selected + 1);
    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);

    if (this.state.selected === selected) return;
    console.log
    this.setState({selected: selected});

  };

  getPageElement(index) {
      return <PageView
        onClick={this.handlePageSelected.bind(null, index)}
        page={index + 1} />
    }

  pagination = () => {
    let items = {};
    if (this.props.totalPages <= this.props.pageRangeDisplayed) {
      for (let index = 0; index < this.props.totalPages; index++) {
        items['key' + index] = this.getPageElement(index);
      }
    } else {
      let leftPages = (this.props.pageRangeDisplayed / 2);
      let rightPages = (this.props.pageRangeDisplayed - leftPages)

      if (this.state.selected > this.props.totalPages - this.props.pageRangeDisplayed / 2) {

        rightPages = this.props.totalPages - this.state.selected;
        leftPages = this.props.pageRangeDisplayed - rightPages

      } else if (this.state.selected < this.props.pageRangeDisplayed / 2) {

        leftPages = this.state.selected;
        rightPages = this.props.pageRangeDisplayed - leftPages;
      }

      let index;
      let page;
      let breakView;
      let createPageView = (index) => this.getPageElement(index);

      for (index = 0; index < this.props.totalPages; index++) {

        page = index + 1;

        if (page <= this.props.marginPagesDisplayed) {
          items['key' + index] = createPageView(index);
          continue;
        }

        if (page > this.props.totalPages - this.props.marginPagesDisplayed) {
          items['key' + index] = createPageView(index);
          continue;
        }

        if ((index >= this.state.selected - leftPages) && (index <= this.state.selected + rightPages)) {
          items['key' + index] = createPageView(index);
          continue;
        }

        let keys = Object.keys(items);
        let breakLabelKey = keys[keys.length - 1];
        let breakLabelValue = items[breakLabelKey];

        if (this.props.breakLabel && breakLabelValue !== breakView) {
          breakView = (
            <li>
              {this.props.breakLabel}
            </li>
          );

          items['key' + index] = breakView;
        }
      }
    }
    return items
  };

  onNextPage = (page, OnPageChange) => {
    const newPage = page + 1;
    this.props.OnPageChange(newPage);
  }
  onBackPage = (page, OnPageChange) => {
    const newPage = page - 1;
    this.props.OnPageChange(newPage);
  }
  onPageSelected = (page) => {
    console.log(page);
    this.props.OnPageChange(page);
  }
  render() {
    const styles = {
      padding: 10,
      cursor: 'pointer',
    }
    const pages = Array(this.props.totalPages).fill(1).map((v, i) => v + i);
    return (
      <ul className="pagination">
        <li><a onClick={() => this.onBackPage(this.props.page)}>BACK</a></li>

        {createFragment(this.pagination())}
        <li><a onClick={() => this.onNextPage(this.props.page)}>NEXT</a></li>
        <PageInformation
          currentPage={this.props.page}
          totalPages={this.props.totalPages}
          totalResults={this.props.totalItems}
        />
      </ul>
    )
  }
}
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
}
export default Pagination;
