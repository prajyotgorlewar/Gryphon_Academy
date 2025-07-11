class UserManager:
    def __init__(self):
        self.users = {}

    def add_user(self, username, email):
        if username in self.users:
            raise ValueError("Username already exists")
        self.users[username] = email
        return True
    
    def get_user(self, username):
        #return self.users[username]
        return self.users.get(username, None)