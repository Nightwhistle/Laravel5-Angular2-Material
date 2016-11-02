<?php

namespace App\Http\Controllers;
use App\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Validator;
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

    public function update(Request $request)
    {
        $req = $request->all();
        $validate = Validator::make($req, [
            'id' => 'required|numeric',
            'task' => 'required|min:3',
            'done' => 'required|digits_between:0,1',
            'priority' => 'required|digits_between:1,10',
        ]);

        if ($validate->fails()) {
            return response()->json($validate->messages(), 422git );
        }

        $task = Task::find($req['id']);
        $task->task = $req['task'];
        $task->priority = $req['priority'];
        $task->done = $req['done'];

        $task->save();
        return $task;
    }

    public function store(Request $request)
    {
    }
    public function createNew(Request $request) {
        $req = $request->all();

        $validate = Validator::make($req, [
            'task' => 'required|min:3'
        ]);

        if ($validate->fails()) {
            return response()->json($validate->messages(), 422);
        }

        $task = new Task();
        $task->task = $req['task'];
        $task->priority = 10;
        $task->done = false;
        $task->save();
        return $task;

    }

    public function show($id, $text)
    {

    }
}
