from flask import Blueprint, request, jsonify
from app import db
from app.models.task import Task

task_bp = Blueprint("task", __name__)

# CREATE TASK
@task_bp.route("/tasks", methods=["POST"])
def create_task():
    data = request.get_json()
    task = Task(
        user_id=data["user_id"],
        title=data["title"]
    )
    db.session.add(task)
    db.session.commit()
    return jsonify({"message": "Task created"})

# GET TASKS
@task_bp.route("/tasks/<int:user_id>", methods=["GET"])
def get_tasks(user_id):
    tasks = Task.query.filter_by(user_id=user_id).all()
    return jsonify([
        {"id": t.id, "title": t.title, "completed": t.completed}
        for t in tasks
    ])

# DELETE TASK
@task_bp.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    task = Task.query.get(task_id)
    if task:
        db.session.delete(task)
        db.session.commit()
    return jsonify({"message": "Task deleted"})