<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('get/employee/list', [EmployeesController::class, 'getEmployeeList'])->name('employee.list');

Route::post('get/employee/detail', [EmployeesController::class, 'getEmployeeDetail'])->name('employee.detail');

Route::post('update/employees/data', [EmployeesController::class, 'updateEmployeeDetail'])->name('employee.update');

Route::delete('delete/employee/data/{eId}', [EmployeesController::class, 'deleteEmployee'])->name('employee.delete');
