/*tslint:disable-next-line*/
export function drag(event, { move: move, up: up }) {
    const startX = event.pageX;
    const startY = event.pageY;
    let x = startX;
    let y = startY;
    let moved = false;
    function mouseMoveHandler(evt) {
        const dx = evt.pageX - x;
        const dy = evt.pageY - y;
        x = evt.pageX;
        y = evt.pageY;
        if (dx || dy) {
            moved = true;
        }
        move(evt, dx, dy, x, y);
        event.preventDefault(); // to avoid text selection
    }
    function mouseUpHandler(evt) {
        x = evt.pageX;
        y = evt.pageY;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        if (up) {
            up(event, x, y, moved);
        }
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL3V0aWxzL2RyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsNEJBQTRCO0FBQzVCLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBaUIsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBd0M7SUFFakcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNmLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNmLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUVsQixTQUFTLGdCQUFnQixDQUFDLEdBQWU7UUFDdkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNmLENBQUM7UUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtJQUNwRCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsR0FBZTtRQUNyQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRWQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEQsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNQLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBNb3ZlSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBVcEhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb3ZlZDogYm9vbGVhbikgPT4gdm9pZDtcblxuLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQsIHttb3ZlOiBtb3ZlLCB1cDogdXB9OiB7IG1vdmU6IE1vdmVIYW5kbGVyLCB1cD86IFVwSGFuZGxlciB9KSB7XG5cbiAgY29uc3Qgc3RhcnRYID0gZXZlbnQucGFnZVg7XG4gIGNvbnN0IHN0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICBsZXQgeCA9IHN0YXJ0WDtcbiAgbGV0IHkgPSBzdGFydFk7XG4gIGxldCBtb3ZlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZHggPSBldnQucGFnZVggLSB4O1xuICAgIGNvbnN0IGR5ID0gZXZ0LnBhZ2VZIC0geTtcbiAgICB4ID0gZXZ0LnBhZ2VYO1xuICAgIHkgPSBldnQucGFnZVk7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShldnQsIGR4LCBkeSwgeCwgeSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyB0byBhdm9pZCB0ZXh0IHNlbGVjdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgeCA9IGV2dC5wYWdlWDtcbiAgICB5ID0gZXZ0LnBhZ2VZO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlmICh1cCkge1xuICAgICAgdXAoZXZlbnQsIHgsIHksIG1vdmVkKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbn1cbiJdfQ==