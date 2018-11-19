function ListNode(val, next) {
  this.val = val;
  this.next = next ? next : null
}

function list2array(head) {
  const result = []

  let cur = head
  while (cur != null) {
    result.push(cur.val)
    cur = cur.next
  }

  return result
}

const reverse = require('./reverse')

test('it should reverse list', () => {
  const head =
    new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4,
            new ListNode(5)))))

  expect(list2array(reverse(head))).toEqual([5,4,3,2,1])
})

test('list with one element should stay the same', () => {
  const head = new ListNode(42)
  expect(list2array(reverse(head))).toEqual([42])
})
