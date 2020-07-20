/**
 * Poblem Statemenet : add comments on child div on basis of comment-count attribute
 * of parent div
 */

"use strict";

/* global $, jQuery */

function solution() {
  let listDiv = $(".comment-list");
  let count = listDiv.attr("data-count");
  listDiv.html("Loading...");
  getResult(count);
}

async function getResult(count) {
  let url = "https://www.example.com/comments?count=" + count;
  try {
    let response = await fetch(url);
    let data = await response.json();
    let html = "";
    data.forEach(item => {
      html += `<div class="comment-item">
                <div class="comment-item__username">${item.username}</div>
                <div class="comment-item__message">${item.message}</div> 
            </div>`;
    });
    $(".comment-list").html(html);
  } catch (e) {
    $(".comment-list").html("");
  }
}
