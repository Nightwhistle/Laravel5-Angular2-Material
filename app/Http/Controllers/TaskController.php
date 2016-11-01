<?php

namespace App\Http\Controllers;
use App\Task;
use Illuminate\Http\Request;

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
        $task->done = $req->done;
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
        $task->done = false;
        $task->save();
        return $task;
    }

    public function show($id, $text)
    {

    }
}
