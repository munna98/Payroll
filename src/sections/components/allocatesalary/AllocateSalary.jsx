import React from "react";
import MonthPicker from "../monthpicker/MonthPicker";
import { Search } from "../Search";
import "./AllocateSalary.css";

export const AllocateSalary = () => {
  return (
    <>
      <section className="main-section">
        <div className="header-allocate-salary">
          <div className="search">
            <Search />
          </div>
          <div className="month-picker">
            <MonthPicker />
          </div>
        </div>
        <div className="salary-card-container">
          <div className="salary-card">
            <div>
              <span className="material-symbols-outlined">sentiment_satisfied</span>
              <div className="card-element">
                <label htmlFor="">Pay:</label>
                <input type="text" />
              </div>
              <div className="card-element">
                <label htmlFor="">Extra Allowance:</label>
                <p>546</p>
              </div>
              <div className="card-element">
                <label htmlFor="">VDA:</label>
                <input type="text" />
              </div>
              <div className="card-element">
                <label htmlFor="">LOP:</label>
                <label htmlFor="">Days</label>
                <input type="text" />
                <p>265</p>
              </div>
            </div>
            <div className="card-total">
              <h3 htmlFor="">Total pay:</h3>
              <h3>14490</h3>
            </div>
          </div>
          <div className="salary-card">
            <div>
            <span className="material-symbols-outlined">
              sentiment_dissatisfied
            </span>
            <div className="card-element">
              <label htmlFor="">EPF:</label>
              <input type="text" />
            </div>
            <div className="card-element">
              <label htmlFor="">ESI:</label>
              <p>546</p>
            </div>
            <div className="card-element">
              <label htmlFor="">Welfare Fund:</label>
              <input type="text" />
            </div>
            <div className="card-element">
              <label htmlFor="">Proffessional tax:</label>
              <p>546</p>
            </div>
            <div className="card-element">
                <label htmlFor="">ExDuty:</label>
                <label htmlFor="">Days</label>
                <input type="text" />
                <p>565</p>
              </div>
            </div>
            <div className="card-total">
              <h3 htmlFor="">Gross Amount:</h3>
              <h3>14284</h3>
            </div>
          </div>
          <div className="salary-card">
            <div>
            <span className="material-symbols-outlined">sentiment_neutral</span>
            <div className="card-element">
              <label htmlFor="">Advance:</label>
              <input type="text" />
            </div>
            <div className="card-element">
              <label htmlFor="">Medicine:</label>
              <input type="text" />
            </div>
            <div className="card-element">
              <label htmlFor="">U Deposit:</label>
              <input type="text" />
            </div>
            <div className="card-element">
              <label htmlFor="">Canteen :</label>
              <input type="text" />
            </div>
            </div>
            <div className="card-total">
              <h3 htmlFor="">Net Amount:</h3>
              <h3>14284</h3>
            </div>
          </div>
        </div>
        <div className="footer-allocate-salary">
          <div className="basic-info">
            <p>Munavir T</p>
            <p>OCM 012</p>
          </div>
          <div className="save-button">
            <button>Save</button>
          </div>
        </div>
      </section>
    </>
  );
};
