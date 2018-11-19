const reverseList = function (head) {
  let cur = head
  let prev = null

  while (cur != null) {
    const temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp 
  }

  return prev
}

module.exports = reverseList

