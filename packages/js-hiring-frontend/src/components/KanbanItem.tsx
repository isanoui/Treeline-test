import React from 'react'

const KanbanItem = ({ kanbanItem, handleStatusChange, handleDelete }: any) => {
  return (
    <div className="kanbanItem">
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{kanbanItem.title}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{kanbanItem.description}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{kanbanItem.status}</td>
          </tr>
          <tr>
            <th>Move To</th>
            <td>
              <select
                defaultValue={'default'}
                name="status"
                id="status"
                onChange={(e: any) =>
                  handleStatusChange(kanbanItem._id, {
                    title: kanbanItem.title,
                    description: kanbanItem.description,
                    status: e.target.value,
                  })
                }
              >
                <option disabled value="default"></option>
                <option value="Backlog">Backlog</option>
                <option value="In Progress">In Progress</option>
                <option value="QA">QA</option>
                <option value="Ready">Ready</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => handleDelete(kanbanItem._id)}
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default KanbanItem
