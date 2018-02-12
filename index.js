'use strict';
//key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
 * TODO を追加する
 * @param {string} task タスク
 */
function todo(task) {
    tasks.set(task, false);
}

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
 * @param {array} taskAndDonePair
 * @return {boolean} 完了したかどうか
 */
function isDone (taskAndDonePair) {
    return taskAndDonePair[1];
}

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
 * @param {array} taskAndDonePair 
 * @return {boolean} 完了していないかどうか
 */
function isNotDone (taskAndDonePair) {
    return !isDone(taskAndDonePair);
}

/** 
 * TODOの一覧の配列を取得する
 * @return {array}
*/
function list () {
    return Array.from(tasks)
        .filter(isNotDone)
        .map(t => t[0]);
}

module.exports = {
    todo: todo,
    list: list
}