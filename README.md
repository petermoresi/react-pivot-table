#+TITLE: React Pivot Table

A simple react component that implements a simple pivot.

    <PivotTable columns="store"
    rows="product"  
    data={
    [{ product: 'A', store: '1'},
    {product: 'B', store: '1'},
    {product: 'C', store: '1'},
    {product: 'D', store: '1'},
    {product: 'A', store: '2'},
    {product: 'B', store: '2'},
    {product: 'C', store: '2'}] }/>

Implemented in ES6 and tested with the babel compiler.
