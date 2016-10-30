<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

use App\Http\Requests;

class TaskController extends Controller
{
    public function index() {
        return Task::all();
    }
}
