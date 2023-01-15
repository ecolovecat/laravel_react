<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeesController extends Controller
{
    //
    public function getEmployeeList() {
        try {
            $employees = Employee::orderBy('id', 'ASC')->get();

            return response()->json($employees);
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    public function getEmployeeDetail(Request $req) {
        try {
            $employee = Employee::find($req->employeeId);

            return response()->json($employee);
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    public function updateEmployeeDetail(Request $req) {
        try {
            $eId = $req->employeeId;
            $name = $req->employeeName;
            $salary = $req->salary;

            Employee::where('id', $eId)->update([
                'employee_name' => $name,
                'salary' => $salary
            ]);

            return response()->json([
                'employee_name' => $name,
                'salary' => $salary
            ]);
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    public function deleteEmployee(Employee $eId) {
        try {
            $eId->delete();
        } catch (\Exception $e) {
            Log::error($e);
        }
    }
}
