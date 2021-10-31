import React from 'react';
import './InfoContainer.css';

function InfoContainer() {
  return (
    <div className="info__container">
      <h1>Info</h1>
      <form action="#" method="post">
        <div class="form-group row">
          <label for="username" class="col-sm-3 col-form-label">
            이름:
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              id="username"
              name="username"
              value=""
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label">
            생년월일:
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              id="name"
              name="name"
              value=""
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label">
            전화번호:
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              id="email"
              name="email"
              value=""
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label">
            E-mail:
          </label>
          <div class="col-sm-9">
            <input
              type="password"
              id="password"
              name="password"
              value=""
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            수정완료
          </button>
        </div>
      </form>
      {/* <form id="info-form" method="post" action="#">
        <ul>
          <li></li>
        </ul>
      </form> */}
    </div>
  );
}

export default InfoContainer;
