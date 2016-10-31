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
        return Task::orderBy('created_at', 'desc')->get();
    }

    public function destroy($id)
    {
        return Task::destroy($id);
    }

    public function update(Request $request, $id)
    {
        $req = json_decode($request->getContent());
        $task = Task::find($req->id);
        $task->task = $req->task;
        $task->priority = $req->priority;

        $done = ($req->done) ? 0 : 1;
        $task->done = $done;
        $task->save();
        return $task;
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
