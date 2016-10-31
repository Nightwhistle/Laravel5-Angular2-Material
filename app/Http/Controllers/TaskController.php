<?php

namespace App\Http\Controllers;

use App\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function destroy($id)
    {
        return Task::destroy($id);
    }

    public function update(Request $request, $id)
    {
        $taskText = $request->json(0);
        $task = Task::find($id);
        $task->task = $taskText;
        $task->save();
        return $taskText;
    }

    public function store(Request $request) {
        $taskText = $request->json(0);
        $task = new Task();
        $task->task = $taskText;
        $task->save();
    }

    public function createNew(Request $request) {
        $taskText = $request->json(0);
        $task = new Task();
        $task->task = $taskText;
        $task->priority = 10;
        $task->done = 0;
        $task->save();
        return $task;
    }

    public function show($id, $text)
    {

    }
}
