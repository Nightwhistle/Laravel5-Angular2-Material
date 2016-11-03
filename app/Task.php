<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $dates = ['published_at'];

    public function getCreatedAtAttribute($date) {
        return Carbon::parse($date)->diffForHumans();
    }
}
