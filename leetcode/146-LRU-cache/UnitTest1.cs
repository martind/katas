using System;
using Xunit;

namespace lru
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            Console.WriteLine("TEST1");
            var lru = new LRUCache(2);
            lru.Put(1, 1);
            lru.Put(2, 2);

            Assert.Equal(1, lru.Get(1));

            lru.Put(3, 3);
            Assert.Equal(-1, lru.Get(2));

            lru.Put(4, 4);
            Assert.Equal(-1, lru.Get(1));
            Assert.Equal(3, lru.Get(3));
            Assert.Equal(4, lru.Get(4));
        }

        [Fact]
        public void Test2() {
            Console.WriteLine("TEST2");
            var lru = new LRUCache(2);
            lru.Put(2,1);
            lru.Put(1,1);
            lru.Put(2,3);
            lru.Put(4,1);
            Assert.Equal(-1, lru.Get(1));
            Assert.Equal(3, lru.Get(2));
        }

        [Fact]
        public void Test3() {
            Console.WriteLine("TEST3");
            var lru = new LRUCache(2);
            Assert.Equal(-1, lru.Get(2));
            lru.Put(2,6);
            Assert.Equal(-1, lru.Get(1));
            lru.Put(1,5);
            lru.Put(1,2);
            Assert.Equal(2, lru.Get(1));
            Assert.Equal(6, lru.Get(2));
        }
      
        [Fact]
        public void Test4() {
            Console.WriteLine("TEST4");
            var lru = new LRUCache(10);
            lru.Put(10, 13);
            lru.Put(3, 17);
            lru.Put(6, 11);
            lru.Put(10, 5);
            lru.Put(9, 10);
            Assert.Equal(-1, lru.Get(13));
            lru.Put(2, 19);
            Assert.Equal(19, lru.Get(2));
            Assert.Equal(17, lru.Get(3));
            lru.Put(5, 25);
            Assert.Equal(-1, lru.Get(8));
            lru.Put(9, 22);
            lru.Put(5, 5);
            lru.Put(1, 30);
            Assert.Equal(-1, lru.Get(11));
            lru.Put(9, 12);
            Assert.Equal(-1, lru.Get(7));
            Assert.Equal(5, lru.Get(5));
            Assert.Equal(-1, lru.Get(8));
            Assert.Equal(12, lru.Get(9));
            lru.Put(4, 30);
            lru.Put(9, 3);
            Assert.Equal(3, lru.Get(9));
            Assert.Equal(5, lru.Get(10));
            Assert.Equal(5, lru.Get(10));
            lru.Put(6, 14);
            lru.Put(3, 1);
            Assert.Equal(1, lru.Get(3));
            lru.Put(10, 11);
            Assert.Equal(-1, lru.Get(8));
            lru.Put(2, 14);
            Assert.Equal(30, lru.Get(1));
            Assert.Equal(5, lru.Get(5));
            Assert.Equal(30, lru.Get(4));
            lru.Put(11, 4);
            lru.Put(12, 24);
            lru.Put(5, 18);
            Assert.Equal(-1, lru.Get(13));
            lru.Put(7, 23);
            Assert.Equal(-1, lru.Get(8));
            Assert.Equal(24, lru.Get(12));
            lru.Put(3, 27);
            lru.Put(2, 12);
            Assert.Equal(18, lru.Get(5));
            lru.Put(2, 9);
            lru.Put(13, 4);
            lru.Put(8, 18);
            lru.Put(1, 7);
            Assert.Equal(-1, lru.Get(6));
            lru.Put(9, 29);
            lru.Put(8, 21);
            Assert.Equal(18, lru.Get(5));
            lru.Put(6, 30);
            lru.Put(1, 12);
            Assert.Equal(-1, lru.Get(10));
            lru.Put(4, 15);
            lru.Put(7, 22);
            lru.Put(11, 26);
            lru.Put(8, 17);
            lru.Put(9, 29);
            Assert.Equal(18, lru.Get(5));
            lru.Put(3, 4);
            lru.Put(11, 30);
            Assert.Equal(-1, lru.Get(12));
            lru.Put(4, 29);
            Assert.Equal(4, lru.Get(3));
            Assert.Equal(29, lru.Get(9));
            Assert.Equal(30, lru.Get(6));
            lru.Put(3, 4);
            Assert.Equal(12, lru.Get(1));
            Assert.Equal(-1, lru.Get(10));
            lru.Put(3, 29);
            lru.Put(10, 28);
            lru.Put(1, 20);
            lru.Put(11, 13);
            Assert.Equal(29, lru.Get(3));
            lru.Put(3, 12);
            lru.Put(3, 8);
            lru.Put(10, 9);
            lru.Put(3, 26);
            Assert.Equal(17, lru.Get(8));
            Assert.Equal(22, lru.Get(7));
            Assert.Equal(18, lru.Get(5));
            lru.Put(13, 17);
            lru.Put(2, 27);
            lru.Put(11, 15);
            Assert.Equal(-1, lru.Get(12));
            lru.Put(9, 19);
            lru.Put(2, 15);
            lru.Put(3, 16);
            Assert.Equal(20, lru.Get(1));
            lru.Put(12, 17);
            lru.Put(9, 1);
            lru.Put(6, 19);
            Assert.Equal(-1, lru.Get(4));
            Assert.Equal(18, lru.Get(5));
            Assert.Equal(18, lru.Get(5));
            lru.Put(8, 1);
            lru.Put(11, 7);
            lru.Put(5, 2);
            lru.Put(9, 28);
            Assert.Equal(20, lru.Get(1));
            lru.Put(2, 2);
            lru.Put(7, 4);
            lru.Put(4, 22);
            lru.Put(7, 24);
            lru.Put(9, 26);
            lru.Put(13, 28);
            lru.Put(11, 26);
        }
    }
}
