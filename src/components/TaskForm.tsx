
export const TaskForm = () => {
    return (
        <header className="AppHeader">
            <form>
                <input type="text" className="TaskInput" placeholder="Enter Your Task" />
                <div className="TaskFormBottomLine">
                    <button type="submit" className="TaskFormSubmit">Low</button>

                    <button type="submit" className="TaskStatus">
                        + Add Task
                    </button>
                </div>
            </form>
        </header>
    )
}