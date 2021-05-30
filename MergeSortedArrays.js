const mergeSortedArrays = () => {
    const firstSortedArrayInput = prompt("Enter the FIRST sorted array please:");
    const secondSortedArrayInput = prompt("Enter the SECOND sorted array please:");
    
    const firstSortedArray = firstSortedArrayInput && firstSortedArrayInput.split(' ');
    const secondSortedArray = secondSortedArrayInput && secondSortedArrayInput.split(' ');

    let mergedArray = [];
    let firstIndex = 0;
    let secondIndex = 0;
    let mergedIndex = 0;

    let firstLength = firstSortedArray ? firstSortedArray.length : 0;
    let secondLength = secondSortedArray ? secondSortedArray.length : 0;

    while (mergedIndex <= (firstLength + secondLength - 1)) {
        // Cases to check:
        // Two arrays are in the same length
        // First array is longer than the second one
        // Second array is longer than the first one
        // One of the arrays is empty or have a length of 1

        const isFirstExhuasted = firstIndex > firstLength - 1;
        const isSecondExhuasted = secondIndex > secondLength - 1;

        if (!isFirstExhuasted && (isSecondExhuasted || firstSortedArray[firstIndex] < secondSortedArray[secondIndex])) {
            mergedArray.push(firstSortedArray[firstIndex]);
            firstIndex++;
        } else if (!isSecondExhuasted) {
            mergedArray.push(secondSortedArray[secondIndex]);
            secondIndex++;
        }
        mergedIndex++;
    }

    console.log("The sorted merged array is:", mergedArray);
}