class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        light = 0
        heavy = len(people) - 1
        boats = 0
        
        while light <= heavy:
            if people[light] + people[heavy] <= limit:
                light += 1
                heavy -= 1
                boats += 1
            else:
                boats += 1
                heavy -= 1
        
        return boats