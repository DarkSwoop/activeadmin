import { queryStringToParams, hasTurbo, turboVisit, toQueryString } from '../lib/utils';

class Filters {

  static _clearForm(event) {
    const regex = /^(q\[|q%5B|q%5b|page|utf8|commit)/;
    const params = queryStringToParams()
      .filter(({name}) => !name.match(regex));

    event.preventDefault();

    if (hasTurbo()) {
      turboVisit(params);
    } else {
      window.location.search = toQueryString(params);
    }
  }

  static _disableEmptyInputFields(event) {
    const params = $(this)
      .find(':input')
      .filter((i, input) => input.value === '')
      .prop({ disabled: true })
      .end()
      .serializeArray();

    if (hasTurbo()) {
      event.preventDefault();
      turboVisit(params);
    }
  }

  static _setSearchType() {
    $(this).siblings('input').prop({name: `q[${this.value}]`});
  }

}

export default Filters;
