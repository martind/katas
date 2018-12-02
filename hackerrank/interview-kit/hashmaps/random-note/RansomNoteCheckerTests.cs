using System;
using Xunit;

namespace RansomNote
{
    public class RansomNoteCheckerTests
    {
        [Fact]
        public void IsYes()
        {
            var sut = new RansomNoteChecker();
            Assert.Equal("Yes", 
                         sut.CheckMagazine(
                                "give me one grand today night".Split(' '), "give one grand today".Split(' ')));
        }

        [Fact]
        public void IsNo()
        {
            var sut = new RansomNoteChecker();
            Assert.Equal("No", 
                         sut.CheckMagazine(
                                "two times three is not four".Split(' '), "two times two is four".Split(' ')));
        }
    }
}
