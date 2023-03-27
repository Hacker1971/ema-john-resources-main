import React from 'react';


const HEADER = () => {
    return (
        <>
            <div className="navbar bg-slate-900 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><p>Ema-John</p> </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Order</a>
        </li>
      <li>
        <a> Order Review </a>
     </li>
      <li>
        <a>Manage Inventory</a>
      </li>
      <li>
        <a>Login</a>
      </li>
    </ul>
  </div>
</div>
        </>
    );
};

export default HEADER;