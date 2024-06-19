# FakeAlert : Fake News Detection App

## About

A POSIX-compliant C-based hotel management system supporting multiple concurrent requests for placing orders, calculating income, assigning waiters, and facilitating efficient management among admin, hotel manager, customers, and staff.

## Key Features
<ul>
  <li> Can support 10+ concurrent table processes with 5+ customers in the system </li>
  <li> POSIX compliant IPC via pipes - named and ordinary </li>
  <li> Concurrent execution and assignment of tables to new customers </li>
  <li> Distinct table-waiter pairs and admin-hotelmanager communication via shared memory </li>
  <li> Hotel manager is responsible for overseeing the total earnings, calculating the total earnings of all the waiters and handling termination </li>
</ul>

## Getting started

### Navigating to root directory
```sh
cd /path/to/the/root
```

### Compiling (GCC compiler) into executable files
```sh
gcc -o table.out table.c
gcc -o waiter.out waiter.c
gcc -o admin.out admin.c
gcc -o hotelmanager.out hotelmanager.c
```

### Running executable files
```sh
table.out
waiter.out
admin.out
hotelmanager.out
```
## How to run?

### For table process
Upon executing the table process, enter a positive integer when prompted :
```sh
Enter Table Number:
Enter Number of Customers at Table:
```

The table process will read the menu from the pre-created menu.txt file, and each customer process orders when prompted :
```sh
Enter the serial number(s) of the item(s) to order from the menu. Enter -1 when done:
```
### For waiter process
Upon executing the waiter process, enter a positive integer when prompted :
```sh
Enter Waiter ID:
```

Once the correct order is received by the waiter process, it calculates the total bill amount of the table and displays :
```sh
Bill Amount for Table X: Y
```
### For hotel manager process
Upon executing the hotel-manager process, enter a positive integer when prompted :
```sh
Enter the Total Number of Tables at the Hotel:
```

On receiving intimation of termination from admin process and only when there are no customers at the hotel, the hotel manager process calculates the total earnings :
```sh
Total Earnings of Hotel: X
Total Wages of Waiters: Y
Total Profit: Z
```
### For admin process
Admin process will keep running along with the table, customer, waiter and hotel manager processes and only one instance of this program is executed when prompted :
```sh
Do you want to close the hotel? Enter Y for Yes and N for No.
```
